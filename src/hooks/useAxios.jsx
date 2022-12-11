import {useState, useEffect, useRef} from 'react';

const useAxios = (configObj) => {
  const {
      axiosInstance,
      method,
      url,
      requestConfig = {}
  } = configObj

  const [response, setResponse] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const effectRan = useRef(false)

  useEffect(() => {
    console.log('mounted')
    const controller = new AbortController()

    if (effectRan.current === true) {
      const fetchData = async () => {
        try {
          const res = await axiosInstance[method.toLowerCase()](url, {
            ...requestConfig,
            signal: controller.signal
          })
          console.log(res)
          setResponse(res.data)
        } catch (err) {
          console.log(err.message)
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }
  
      fetchData()  
    }

    return () => {
      console.log('effect ran')
      effectRan.current = true
      controller.abort()
    }

  }, [])

  return [response, error, loading]
};

export default useAxios
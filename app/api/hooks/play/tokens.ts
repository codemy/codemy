import { useState, useEffect } from 'react'
import { TokenType } from '~api/typings/studio/v1/play'
import { SingletonResponse } from '~api/typings'
import { get } from '~/api/middleware'

type TokenResponse = SingletonResponse<TokenType>

type TokenParams = {
  vodPlayId: string
}

function useToken(name: string, path: string, params: TokenParams) {
  const [loading, setLoading] = useState<boolean>(true)
  const [token, setToken] = useState<string>()

  const { vodPlayId } = params

  function beforeStart() {
    setLoading(true)
  }

  function afterFinish(json: TokenResponse) {
    setToken(json.data.token)

    setLoading(false)
  }

  useEffect(() => {
    get(beforeStart, afterFinish, name, path, params)
  }, [vodPlayId])

  return { loading, token }
}

export { useToken }

import { useAuthContext } from "./useAuthContext"
import { usePostsContext } from "./usePostsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: postsDispatch } = usePostsContext()

    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('user')

        // set user to null in authContext
        dispatch({type: 'LOGOUT'})
        postsDispatch({type: 'SET_POSTS', payload: null})
    }

    return {logout}
    
}
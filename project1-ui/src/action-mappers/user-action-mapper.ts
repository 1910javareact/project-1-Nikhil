import { getUserId } from "../remote/user-by-id"

export const UserTypes = {
    INVALID_CREDENTIALS: 'TOKEN_HAS_EXPIRED',
    SUCCESSFUL_USER: 'USERID_FOUND',
    UNSUCCESSFUL_FAILED: 'USERID_NOT_FOUND'
}
export const userID = (id: number) => async (dispatch: any) => {

    try {
        let res = await getUserId(id)
        //a successful login
        if (res.status === 200) {
            //this is how do it when we have async operations
            dispatch({
                type: UserTypes.SUCCESSFUL_USER,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: UserTypes.INVALID_CREDENTIALS
            })
        }
    } catch (e) {
        dispatch({
            type: UserTypes.UNSUCCESSFUL_FAILED
        })
    }

}
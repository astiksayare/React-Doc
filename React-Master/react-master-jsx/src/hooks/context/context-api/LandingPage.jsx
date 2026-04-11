import * as ContextApi from './index'

export const LandingPage = () => {
    return (
        <section>
            <h1>Welcome to the Landing Page...</h1>
            <ContextApi.MyProfile />
        </section>
    )
}
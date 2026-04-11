import { ProfileDetails } from "./ProfileDetails"

export const LandingModule = ({user}) => {
    return (
        <section className="flex-column">
            <h1>Welcome to the landing Page</h1>
            <ProfileDetails user={user}/>
        </section>
    )
}
import Link from "next/link";
import getTalent from "../../../../apis/getTalent";
import Talent from "../../../../components/Talent";

export default async function TalentPage({params: {id}}:any) {
    const talentsData = await getTalent(id)
    console.log(talentsData)

    return(
        <div className="flex flex-col items-center pt-20"> 
            <p className="font-semibold">Individual talent:</p>
            <Talent
                name={talentsData.acf.name}
                last_name={talentsData.acf.last_name}
                profile_image={talentsData.acf.profile_image}
                phone={talentsData.acf.phone}
                age={talentsData.acf.age}
                state={talentsData.acf.state}
                postal_code={talentsData.acf.postal_code}
                email={talentsData.acf.email}
                date_of_birth={talentsData.acf.date_of_birth}
                description={talentsData.acf.description}
                industry={talentsData.acf.industry}
                languages={talentsData.acf.languages}
                credentials={talentsData.acf.credentials}
                licenses={talentsData.acf.licenses}
                visa={talentsData.acf.visa}
             />
             <Link href={'/talents'} className="font-semibold hover:underline">Go back Talents list</Link>
        </div>
    )
}
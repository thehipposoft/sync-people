import Link from "next/link"
import getTalents from "../../../apis/getTalents"

export default async function TalentsPage() {

    const talents = await getTalents()

  return (
    <div className="flex flex-col items-center">
        <h1 className="flex font-semibold justify-center">ALL TALENTS LIST</h1>
        {
            talents.map((talent:any) => {
                return(
                    <div className="flex justify-center pt-10" id={talent.id} key={talent.id}>
                            <p className="font-semibold">
                                <Link href={`/talents/${talent.id}`}>
                                    {talent.name}
                                </Link>
                            </p>
                    </div>
                )
            })
        }
        <Link href={'/'} className="font-semibold hover:underline mt-20">Go back home</Link>
    </div>
  )
}

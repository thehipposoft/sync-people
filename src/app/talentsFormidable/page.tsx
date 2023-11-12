import Link from "next/link"
import getFormidableTalents from "../../../apis/getFormidableTalents"

export default async function TalentsPage() {

    const talents = await getFormidableTalents()

  return (
    <div className="flex flex-col items-center">
        <h1 className="flex font-semibold justify-center">ALL TALENTS LIST</h1>

        <Link href={'/'} className="font-semibold hover:underline mt-20">Go back home</Link>
    </div>
  )
}

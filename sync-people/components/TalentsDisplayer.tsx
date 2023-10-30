'use client'
import React, {useEffect} from 'react'
import Talent from './Talent'
import { TALENT_DATA } from './TalentConstant';

//talent ID
const TalentsDisplayer = ({ talentId }:any) => {

  useEffect(() => {
    const fetchTalents = async () => {
      const response = await fetch(`http://sync-staging.thehipposoft.com/wp-json/wp/v2/talent/${talentId}`)
      const talents = await response.json();
      const cleanTalents = talents.map((t:any) => {
        return {
          ...t.acf,
          id: t.id,
          status: t.status
        }
      })
      console.log('clean', talents)

    }
    fetchTalents()
  }, [])

  return (
    <div>
      {
        TALENT_DATA.map((val:any, i:any) => 
            <Talent
                name={val.name}
                image={val.image}
                lastname={val.lastname}
                age={val.age}
                phone={val.phone}
                location={val.location}
                email={val.email}
                dob={val.dob}
                description={val.description}
                industrie={val.industrie}
                languages={val.languages}
                licenses={val.licenses}
                credentials={val.credentials}
                visa={val.visa}
            />)
      }
    </div>
  )
}

export default TalentsDisplayer

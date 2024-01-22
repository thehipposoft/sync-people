import React from 'react';

const TalentsPage = () => {

    fetch('http://sync-staging.thehipposoft.com/wp-json/wp/v2/posts').then(
        response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed to fetch')
        }, networkError => console.log(networkError.message)
    ).then( jsonResponse => {
        console.log(jsonResponse)
    })

    return (
        <div>
            Talents page
        </div>
    );
};

export default TalentsPage;
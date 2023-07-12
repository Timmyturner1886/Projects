const API_KEY = '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'

/*scans for element with id of 'submit'.*/
const submitButton = document.querySelector('#submit')

async function getMessage(){
    console.log('clicked')
/*information to be parsed. what you would like to get from the API*/
   const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: "Hello!"}]
        })

    }
    try {
        await fetch('https://api.openai.com/v1/completions', options)
        const data = await response.json()
        console.log(data)

    } catch (error) {
       console.error 
    }

/*whenever submit button is clicked, the function getMessage is evoked.*/
    submitButton.addEventListener('click', getMessage)
}
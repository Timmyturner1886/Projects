const formInput = document.querySelector('.formInput');
const data = document.querySelector('.user-input')

const API_KEY = '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'

formInput.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(`Using promise chaining: ${getMessage()}`);
    console.log(`Using async await: ${getMessage2()}`)
})

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

// using promise chaining
function getMessage(){

    axios.post('https://api.openai.com/v1/completions', options)
    .then((response)=>{
        console.log(response.data);
        return response.data
    })
    .catch((e)=>{
        return e.message
    })
}

// using async await

async function getMessage2(){
    try {
        const result = await axios.post('https://api.openai.com/v1/completions', options)
        console.log(result.data);
        return result.data
    } catch (error) {
        return error.message
    }
}
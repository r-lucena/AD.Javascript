const url = "https://jsonplaceholder.typicode.com/todos"
const data = {
    title : "todo title",
    completed : true,

}

async function postData (link,info) {
    const postReq = await fetch(link, {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
            "Content-Type": "application/json",
        }
    })

    const postAnswer = await postReq.json()
    console.log(postAnswer);
}

postData(url,data)
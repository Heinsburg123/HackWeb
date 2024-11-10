"use server";

export async function handleSendMessage(formData: FormData) {
    const prompt = formData.get("prompt");

    const responseMessage = `Your question is: ${prompt}`;

    return responseMessage;
}

// export async function fetchGraphData() {
//     let data = await fetch("https://7648-128-119-202-11.ngrok-free.app/")
//     let posts = await data.json()

//     return posts
// }

export async function fetchGraphData(formData: FormData) {
    let data = await fetch("https://f977-128-119-202-9.ngrok-free.app/research/", {
        method: "POST",
        body: formData,
    });
    let posts = await data.json();
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return posts;
}

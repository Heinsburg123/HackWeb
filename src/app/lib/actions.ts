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

export async function fetchGraphData1(formData: FormData) {
    const data = await fetch("https://aa29-128-119-202-179.ngrok-free.app/graph1", {
        method: "POST",
        body: formData,
    });

    const post = await data.json();

    return post;
}

export async function fetchGraphData2(formData: FormData) {
    const data = await fetch("https://aa29-128-119-202-179.ngrok-free.app/graph2", {
        method: "POST",
        body: formData,
    });

    const post = await data.json();

    return post;
}

export async function fetchGraphData(formData: FormData) {
    const [data1] = await Promise.all([
        fetch("https://2dcc-128-119-202-14.ngrok-free.app/course/", {
            method: "POST",
            body: formData,
        }),
        // fetch("https://6dd2-128-119-202-159.ngrok-free.app/research/", {
        //     method: "POST",
        //     body: formData,
        // }),
    ]);

    const post1 = await data1.json();
    // const post2 = await data2.json();

    // const post1 = {"link":[],"adj":[[1],[2,3,4],[],[],[5],[6,7,8],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],"header":["Main page","Machine Learning","Machine Learning (General)","Causal Inference & Data Science","Probabilistic Models & Time Series","Machine Learning Research","REML Lab","Current Projects","Publications"],"info":["Machine learning is the study of computational methods for pattern discovery and skill acquisition. It includes methods by which both humans and artificial agents can improve their behavior while interacting with their environments.","All the professors listed are related to machine learning and could potentially help the student. However, based on the student's request, here are the professors with a more direct focus on machine learning: Ina Fiterau Brostean, David Jensen, Ben Marlin, Andrew McCallum, and Hamed Zamani.",null,null,"Ben Marlin is a professor with research interests at the intersection of artificial intelligence, machine learning, and statistics. His current research has a particular emphasis on models and algorithms for multivariate time series data. He has worked on a broad range of applications including machine learning-based analytics for clinical and mobile health (mHealth) data. To learn more about his work, visit his personal website.","Professor Benjamin Marlin is a leading researcher in the field of machine learning and directs the Robust and Efficient Machine Learning (REML) Lab at the University of Massachusetts Amherst. His research focuses on developing robust and efficient machine learning models and algorithms, with a particular emphasis on probabilistic machine learning and deep learning. Recent research topics include modeling sparse and irregularly sampled time series, methods for learning from scarce time series data, and optimizing models for resource-constrained and real-time deployment. Professor Marlin's research is informed by multiple real-world application domains and machine learning deployment contexts, including clinical and mobile health, embedded systems, and the Internet of Things.",null,null,"The website provides brief summaries of machine learning related research and projects conducted by PhD students, postdocs, and undergraduate researchers. These projects cover a wide range of topics including deep learning for multi-modal detection, localization, and tracking, Bayesian time series modeling, and reinforcement learning with applications to behavioral data analysis and just-in-time adaptive interventions. Other projects focus on modeling incomplete wearable sensor data using deep time series models, application of structured prediction, domain adaptation, and active learning to problems in mobile health. The researchers have gone on to work at various companies such as Facebook AI Research, Google, IBM Research, Amazon, and Philips Research North America.",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}
    const post2 = {
        "adj": [
            [
                1,
                2,
                3
            ],
            [],
            [
                4,
                5
            ]
        ],
        "header": [
            "node0",
            "node1",
            "node2",
            "node3",
            "node4",
            "node5"
        ]
    }

    return [post1, post2];
}

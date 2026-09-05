function fetchUserData() {
    return new Promise((resolve, reject) => {

        console.log("Fetching user data...");

        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({
                    name: "Nisha",
                    email: "nishajadhav032005@gmail.com",
                    message: "Data received successfully!"
                });
            } else {
                reject("Failed to fetch data!");
            }

        }, 2000);
    });
}


async function getUserData() {
    try {
        console.log("Please wait...");

        const user = await fetchUserData();

        console.log("Name:", user.name);
        console.log("Email:", user.email);
        console.log(user.message);

    } catch (error) {
        console.log("Error:", error);
    }
}


getUserData();
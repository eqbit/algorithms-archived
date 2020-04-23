{
    class HttpError extends Error {
        constructor(response) {
            super(`${response.status} for ${response.url}`);
            this.name = 'HttpError';
            this.response = response;
        }
    }

    function loadJson(url) {
        return fetch(url)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw new HttpError(response);
                }
            })
    }

// Запрашивать логин, пока github не вернёт существующего пользователя.
    async function demoGithubUser() {
        while(true) {
            const name = prompt("Введите логин?", "iliakan");
            try {
                const user = await loadJson(`https://api.github.com/users/${name}`);
                alert(`Полное имя: ${user.name}.`);
                break;
            }
            catch (err) {
                if (err instanceof HttpError && err.response.status == 404) {
                    alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                } else {
                    throw err;
                }
            }
        }
    }

    //demoGithubUser();

    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));

        return 10;
    }

    function f() {
        wait().then(response => console.log(response));
    }

    //f();
}

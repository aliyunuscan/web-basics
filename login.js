document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed'); 

    document.getElementById('loginForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        console.log('Form submitted'); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log('Username:', username); 
        console.log('Password:', password); 

        try {
            const response = await fetch('http://localhost:5500/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            console.log('Response status:', response.status); 

            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('userId', data.userId);
                console.log(data.userId);
                alert('Login successful');
            } else {
                const errorData = await response.json();
                alert(`Login failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    });
});

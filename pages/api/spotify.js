export default function handler(req, res) {
const client_id = 'aa588ad9e37f4b10ae5546505db6a586';
const client_secret = 'eea5b02bd08e4dd6befe6052f9f599e9';
const url = 'https://accounts.spotify.com/api/token'


fetch(url, {
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
.then(r => r.json())
.then(r => {
    console.log(r.access_token, "token")
})
}

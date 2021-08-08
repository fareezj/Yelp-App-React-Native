import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ArO9rwmyKR1_IJpXKbvRZdj2JQqVPULzJgxq7GFFJwkX5epoUXcarYFtT8GyLr6NzpVKI3WNx8g2xTbi0Gwr0i2kwoEk50QVqvpqf1CuKjQWEyNhxX27rlDgsyoKYHYx'
    }
});
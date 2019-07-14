import axios from 'axios';

const KEY = 'AIzaSyAq_7aKcnDylXxYe6v_hFxTrS3GXqB6Ldk' ;

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});

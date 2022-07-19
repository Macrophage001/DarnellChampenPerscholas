import { useState } from 'react';
import NavBar from './components/navBar';
import './App.css';
import axios from 'axios';

const tryCatch = (fn, fallback = (err) => console.error(err)) => {
  return (...args) => {
    try {
      return fn(...args)
    } catch (e) {
      return fallback(e)
    }
  }
}

const App = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState('');
  // const [summary, setSummary] = useState({
  //   total: 10,
  //   totalAfter: 5,
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    tryCatch(async () => {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('/api/upload', formData);
      console.log(res.data);
      const res2 = await axios.get('/api/upload');
      setImage(res2.data);
      console.log(image);
    })();
  }

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  }

  return (
    <div>
      <h1>Home</h1>
      <NavBar />
      {/* <p>{summary.total}</p> */}
      <form onSubmit={handleSubmit} method="post">
        <input type="file" name="image" onChange={handleOnChange} />
        <input type="submit" value="Submit" />
      </form>

      <img src={image} alt="preview-image" />
    </div>
  );
}

export default App;

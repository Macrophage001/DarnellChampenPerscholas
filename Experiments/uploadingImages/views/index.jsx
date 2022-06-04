import React from 'react'

const Index = ({ images }) => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <div>
                    <form action="/" method='POST' encType='multipart/form-data'>
                        <div>
                            <label htmlFor="name"></label>
                            <input type="text" id='name' placeholder='Name' value="" name='name' />
                        </div>
                        <div>
                            <label htmlFor="desc"></label>
                            <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Description...'>
                            </textarea>
                        </div>
                        <div>
                            <label htmlFor="image"></label>
                            <input type="file" id='image' name='image' value="" required={true} />
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>

                <h1>Uploaded Images</h1>
                <div>
                    {images && images.map((img, i) => {
                        return (
                            <div>
                                <img src={`data:image/${img.img.contentType};base64,${img.img.data.toString('base64')}`} alt="uploaded_img" width={'100px'} height={'100px'} />
                            </div>
                        )
                    })}
                </div>
            </body>
        </html>
    )
}

module.exports = Index
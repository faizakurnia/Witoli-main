import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './ListWisata.css'

const ListWisata = () => {

    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [click, setClick] = useState("")

    const client = require('contentful').createClient({
        space: 'h8p5u4i8urpb',
        accessToken: 'uv5OoGVAGhvdwJkSVDPHjUqJkNru_3yqL3vRurx06qI'
    })

    useEffect(() => {
        client.getEntries({
            content_type: 'wisata'
        })
            .then((response) => {
                setData(response.items)
            })
    }, [])


    const handleChange = event => {
        setClick(event.target.value);
    };
    function handleClick(e) {
        e.preventDefault();
        setInput(click)
    }

    return (
        <div className="listwisata">
            <img className="banner__img" src="/img/PantaiTaragusung.jpg" alt="tes" />
            <div className="listwisata__search">
                <input type="text" placeholder="Search..." onChange={handleChange} />
                <button type="submit" onClick={handleClick}><i class="fa fa-search"></i></button>
            </div>
            <div className="listwisata__item">
                <div className="posts__container">
                    <div className="posts">
                        {data.filter((val) => {
                            if (setInput == "") {
                                return val
                            } else if (val.fields.name.toLowerCase().includes(input.toLowerCase())) {
                                return val
                            }
                            console.log(val)
                        }).map((val) => {
                            return (
                                <Link
                                    className="posts__post"
                                    key={val.fields.slug}
                                    to={val.fields.slug}
                                >
                                    <div className="posts__card">
                                        <img src={val.fields.image.fields.file.url} alt={val.fields.name} />
                                        <h3 className="card__name">{val.fields.name}</h3>
                                    </div>

                                </Link>
                            )
                        })}
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ListWisata

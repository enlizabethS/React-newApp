import React, { useEffect, useState } from 'react';

import style from './GenderReveal.module.css';

function GenderReveal(): JSX.Element {
    const [firstname, setFirstName] = useState<string>('');
    const [gender, setGender] = useState<string>('...');
    const handleSubmmit = (event: React.FormEvent): void => {
        event.preventDefault();
    };
    useEffect(() => {
        async function loadGender(): Promise<void> {
            const response = await fetch(`https://api.genderize.io/?name=${firstname}`);
            const obj = await response.json();
            // console.log(obj);
            setGender(obj.gender);
        }
        loadGender();
    }, [firstname]);
    return (
        <div className={style.genderBox}>
        <h1>Find out your gender</h1>
        <form action="" method="post" onSubmit={handleSubmmit}>
            <label className={style.preview} htmlFor=""> Enter your name </label>
            <input className={style.mini} type="text" placeholder=" Ivan/ Maria" value={firstname} onChange={(event):void => setFirstName(event.target.value)} />
            {/* <button type="submit">Find out the gennder</button> */}
        </form>
        <div className={style.preview}> Answer: {gender}</div>
        </div>
    );
}
export default GenderReveal;

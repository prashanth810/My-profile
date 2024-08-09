import React, { useEffect, useState } from 'react';

const getnums = () => {
    const list = [];
    for (let i = 0; i <= 8; i++) {
        list.push(i);
        list.push(i);
    }
    return list;
}
const Memorygame = () => {
    const [nums, setNums] = useState(getnums());
    const [stage, setStage] = useState('initial');
    const [opend, setOpend] = useState([]);
    const [solved, setSolved] = useState([]);

    const rendomnums = () => {
        const copyNums = [...nums];
        return copyNums.sort(() => Math.random() - 0.5);
    }
    const handlestart = () => {
        setStage('start');
        setNums(rendomnums());
        setSolved([]);
    }
    console.log('solved', solved)
    console.log("opend", opend);

    const handleclick = (val, i) => {
        if (opend.length === 2 || opend.includes(i)) return
        setOpend((prev) => [...prev, i])
    }

    useEffect(() => {
        if (opend.length === 2) {
            setTimeout(() => {
                const ind1 = opend[0];
                const ind2 = opend[1];
                if (nums[ind1] === nums[ind2]) {
                    setSolved((prev) => [...prev, nums[ind1]]);
                }
                setOpend([]);

            }, 200)
        }
    }, [opend, nums]);

    useEffect(() => {
        if (solved.length === 9) {
            setStage('win');
        }
    }, [solved])

    const getclassnamecard = (val, i) => {
        if (solved.includes(val)) {
            return "remove";
        }
        else if (opend.includes(i)) {
            return 'show';
        } else {
            return 'hide';
        }
    }
    return (
        <div>
            <div className='text-center'>
                {stage === 'initial' && <button onClick={handlestart} className='play_game'> Play Game </button>}
            </div>



            <div>
                {
                    stage === 'start' &&
                    <div className={`game`}>
                        <div className='cards'>
                            {
                                nums.map((val, i) => {
                                    return (
                                        <div key={i} >
                                            <h2 className={`card_cards ${getclassnamecard(val, i)}`}
                                                onClick={() => handleclick(val, i)}
                                            >{val}</h2>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                }

            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {
                    stage === 'win' &&
                    <div>
                        <h2> You Won the game !...</h2>
                        <button onClick={handlestart} className='play_Again'> Play Again </button>
                    </div>

                }

            </div>

        </div >
    )
}

export default Memorygame

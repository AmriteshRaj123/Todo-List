
export default function Data({wishlist}) {
    let list=wishlist.map((item, index)=><li key={index}>{item}</li>);
    return (
        <>
            <div className="datalist">
                <h2>Wish List</h2>
                <ul>
                    {list}
                </ul>
            </div>
        </>
    )
}


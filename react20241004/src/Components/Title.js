const Title = ({setOpenModal, setReg}) =>{
    return (
        <div className="title">
            <h1>식단표<button onClick={() => {setOpenModal(true); setReg(true)}}>추가</button></h1>
        </div>
    );
  }

  export default Title;
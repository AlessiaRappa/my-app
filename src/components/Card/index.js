import "./style.css";

export const Card =  ({ title, description }) => (
    <div className="card"> 
        <p className="title"><b>{title}</b> </p>
        <p className="description">{description} </p>
    </div>
);
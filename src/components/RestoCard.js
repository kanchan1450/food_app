import { CDN_URL } from "../utils/Constants";

const RestoCard = (props) => {
    const{resData} = props;
    const{name,
        cuisines,
        avgRating,
        costForTwo,areaName,
        sla, 
        cloudinaryImageId
        
    } = resData?.info;
    return(
        <div className="m-4 p-4 w-[250px] h-[450px] shadow-lg rounded-lg border-solid border-teal-900 border-2">
            <img className="rounded-lg object-cover w-64 h-48 border border-solid border-black"
            alt = "res-logo"
             src ={CDN_URL+cloudinaryImageId}></img>
            <h3 className="my-4 font-bold">{name}</h3>
            <h4 className="my-1"> {cuisines.slice(0,4).join(", ")}</h4>
            <h3 className="my-1">⭐ {avgRating} : {sla?.slaString} </h3>
            <h3 className="my-1">{costForTwo}</h3>

            <h3 className="1">📍 {areaName}</h3>
        </div>
    );
};

export const withPromotedLevel = (RestoCard) =>{
    return (props) => {
        return (
            <div>
            <label className="absolute rounded-lg bg-black text-white p-2">Opened</label>
            <RestoCard {...props}/>
            </div>
        );

    };
};


export default RestoCard;
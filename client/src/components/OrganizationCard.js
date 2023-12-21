import React from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';


function OrganizationCard({ organization }) {
    // Destructure based on array indices
    const [id, name, imageurl, about] = organization;
    const imageUrlWithExtension = `${imageurl}.png`;
  
    return (
      <li className="card">
      <Link href="/NewDonationForm" passHref>
        <img src={imageUrlWithExtension} alt={name} />
        <h4>{name}</h4>
        <p>{about}</p>
        <button>
            <FontAwesomeIcon icon={faDonate} className="button-icon" />
            <span className="button-text">Donate</span> 
        </button>
      </Link>
    </li>
    

    );
  }
  
  export default OrganizationCard;
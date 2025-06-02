import Link from "next/link";
import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="flex center mt-2">
      <h2>Personne non trouvée</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nam et
        harum voluptate labore accusamus blanditiis, sint minima veritatis
        eveniet excepturi, aliquam ab? Blanditiis quas odit possimus illo
        reprehenderit saepe minima temporibus asperiores ipsa, aliquam animi
        repellendus facere est ut!
      </p>
      <Link className="btn-danger" href={"/persons"}>
        Retourner
      </Link>
    </div>
  );
}
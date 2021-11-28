import React from "react";
import Image from "next/image";
import HeadeItem from "./HeaderItem";
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline"

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeadeItem title="HOME" Icon={HomeIcon} />
        <HeadeItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeadeItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeadeItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeadeItem title="SEARCH" Icon={SearchIcon} />
        <HeadeItem title="ACOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain pb-2"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;

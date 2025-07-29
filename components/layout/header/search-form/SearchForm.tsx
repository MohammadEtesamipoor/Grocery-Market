import React from 'react';
import {IconComponent} from "@/components";

export function SearchForm() {
    //TODO should update form structure
    return (
        <form className={"flex  w-[80%] xl:flex-1 border-2 border-[#BCE3C9] rounded-sm  px-5 py-3"} action="#">
            <input className="flex-1 focus:outline-none" type="text" name="search" id="search"
                   placeholder="Search for itemsss"/>
            <button type="submit">
                <IconComponent className={"cursor-pointer"} iconName={"search"} width={30} height={24}/>
            </button>
        </form>
    );
}
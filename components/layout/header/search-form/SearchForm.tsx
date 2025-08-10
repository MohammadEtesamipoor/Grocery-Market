import React, {useEffect, useState} from 'react';
import {IconComponent} from "@/components";
import { useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {getAllProducts} from "@/api/product/getAllProducts";
import {EntityDataType} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";
interface InputSearch {
    search: string;
}

interface FilterData{
    title: {
        $contains:string;
    };
}
export function SearchForm() {
    const{register,handleSubmit,watch}=useForm<InputSearch>()
    const[searchData,setSearchData]=useState<EntityDataType<ProductType>>();
    const searchInput=watch('search')

    useEffect(() => {
        if(searchInput && searchInput.length >= 1)
        handleSubmit(onSubmit)()
        else{
            setSearchData()
        }
    }, [searchInput]);
     const mutation=   useMutation({
            mutationFn:(data:FilterData)=>getAllProducts({filters:data})
        })

    const onSubmit = (data:InputSearch) => {
        mutation.mutate({
            title:{
                '$contains':data.search
            }
        },{
            onSuccess:(response:any)=>{
                setSearchData(response.data);
            }
            }
        )

    }


    return (
        <div className={"relative w-[80%]"}>
        <form onSubmit={handleSubmit(onSubmit)}
              className={"flex  w-full xl:flex-1 border-2 border-[#BCE3C9] rounded-sm  "}
              >
            <input
                autoComplete="off"
                className="focus:outline-none px-5 py-3 flex-11/12"
                type="text"
                id="search"
                {...register("search")}
                   placeholder="Search for items"/>
            <button type="submit" className={"cursor-pointer flex-1/12"}>
                <IconComponent className={"cursor-pointer z-0"} iconName={"search"} width={30} height={24}/>
            </button>
        </form>
            {
                searchData &&
            <div className={"absolute z-[100] w-full border border-[#BCE3C9] bg-gray-100 border-t-0 rounded-sm mt-2.5 px-5 py-3"}>
                <ol>
                    {
                        searchData.map((item:EntityDataType<ProductType>)=>(
                            <li className={"p-3 hover:bg-Nest-mart-border3 cursor-pointer"} key={item.id}>{item.attributes.title}</li>
                        ))
                    }
                </ol>
            </div>
            }
        </div>
    );
}
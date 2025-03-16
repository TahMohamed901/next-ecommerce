"use client"
import { poppins } from "@/app/layout";
import Image from "next/image"
import { useRouter } from "next/navigation";
const Searchbar = () => {
const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if(name){
      router.push(`/list?name=${name}`)
    }
  };
  return (
    <form
    className="flex items-center justify-between gap-4 bg-gray-200 p-2 px-4 rounded-2xl flex-1"
    onSubmit={handleSearch}
    >
        <input type="text" name="name" placeholder="Search" className="pl-4 flex-1 bg-transparent outline-none font-thin text-sm" />
        <button className="cursor-pointer">
            <Image src="/icons/search.png" alt="" width={16} height={16}/>
        </button>
    </form>
  )
}

export default Searchbar
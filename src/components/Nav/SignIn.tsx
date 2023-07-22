import UserIcon from "@/assets/site/usericon-notloggeddin.svg"

export default function SignIn(){
    return (
        <div className="border flex rounded-full items-center flex-row pl-2 pr-3 py-1 hover:cursor-pointer hover:bg-slate-200 text-sm">
            <div className="pr-2">
                <UserIcon />
            </div>
            Sign in
        </div>
    )
}

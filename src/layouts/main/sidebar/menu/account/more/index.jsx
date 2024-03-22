import { setCurrentAccount } from "../../../../../../store/auth/actions"
import { useAccount, useAccounts } from "../../../../../../store/auth/hooks"
import classNames from "classnames"


export default function More({close}){
    const accounts= useAccounts()
    const currentAccount = useAccount()
    return(
    <div className=" py-4 ">
        <div  className=" justify-center">
            {accounts.map(account => (

                <button
                type="button"
                onClick={() => {
                    setCurrentAccount(account)
                    close()
                } }
                key={account.username}  className= {classNames("py-3 px-4 flex items-center w-full transition-colors cursor-default",{
                    "hover:bg-[#eff3f41a] cursor-pointer" :currentAccount.id !== account.id 
                })} >
                    <img src={account.avatar} alt="" width={40} height={40} className="rounded-full" />
                    <div className="mx-3 text-[15px] text-left flex-1 ">
                        <h6 className=" font-bold">{account.fullname}</h6>
                        <div className=" text-[#71767b] ">
                            @{account.username}
                        </div>
                    </div>
                    {currentAccount.id == account.id && (
                        <svg  viewBox="0 0 24 24" className=" mr-2 ml-3" width={16} height={16}>
                            <path 
                                fill="#00ba7c"
                                d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"/>
                        </svg>
                    )}
                </button>
            ))}
        </div>
        <div>
            <div className=" bg-[#2f3336] h-[1px] my-3"></div>
        <button className="p-3 h-11 w-full inline-flex items-center gap-5 transition-colors hover:bg-[#eff3f41a]">
                <div className=" text-[15px] leading-5 text-[#e7e9ea] pr-4 font-bold">
                Var olan bir hesap ekle
                </div>
        </button>
        <button className="p-3 h-11 w-full inline-flex items-center gap-5 transition-colors hover:bg-[#eff3f41a]">
                <div className=" text-[15px] leading-5 text-[#e7e9ea] pr-4 font-bold">
                Hesapları yönet
                </div>
        </button>
        <button className="p-3 h-11 w-full inline-flex items-center gap-5 transition-colors hover:bg-[#eff3f41a]">
                <div className=" text-[15px] leading-5 text-[#e7e9ea] pr-4 font-bold">
                        hesabından çıkış yap
                </div>
        </button>
        </div>
    </div>
    )
}
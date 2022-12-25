import { abis } from "@my-app/contracts"
//ABI(application binary interface) is the context of computer science btwn 2 program modules often between operating systems and user programs

export const getRouterInfo = async (routerAddress, web3) => {
    const router = new web3.eth.Contract(abis.router02,routerAddress);
    return{
        factory: await router.methods.factory().call()   //the factory address returned by getRouterInfo is the address of the factory contract we compiled and deployed using CRANQ
    }
}
const formatCurrency = new Intl.NumberFormat(undefined,{
    style:"currency",
    currency:"INR"
})

export default function formatNumber (number:number){
    return formatCurrency.format(number*70);
}
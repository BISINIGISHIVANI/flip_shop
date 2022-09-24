const CategoryFilterData=(data,{solidJacket,thinJacket,lightWeightJacket})=>{
  if(!solidJacket&& !thinJacket&& !lightWeightJacket){
      return data
  }
  const filterData=[];
  if(solidJacket){
      const getData=data.filter((item)=>item.categories==="Bomber Solid Jacket");
      filterData.push(...getData);
  }
  if(thinJacket){
    const getData=data.filter((item)=>item.categories==="Bomber Thin Jacket");
    filterData.push(...getData);
   }
  if(lightWeightJacket){
    const getData=data.filter((item)=>item.categories==="Bomber Light weight Jacket");
    filterData.push(...getData);
  }  
  return filterData;
}
export {CategoryFilterData}
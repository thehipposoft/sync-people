type ExtrasPropsType = {
    currentIndex: number;
    isVisible: boolean;
 }

 const Extras = ({
     currentIndex,
     isVisible,
 }:ExtrasPropsType) => {
     return (
         <div
             className={`flex-col duration-1000 md:min-w-[850px] md:px-4 py-6 md:py-0`}
             style={{
                 translate: `${-100 * currentIndex}%`,
             }}
         >
             <div className='flex items-center justify-between pt-8'>
                 <h4 className='font-bold py-4 text-xl'>
                    Fantastic! you have reached the end of the form
                 </h4>
             </div>
             <p className='pb-4 text-[#1A335D] text-lg'>
                Fantastic! you have reached the end of the form
             </p>
             <div className={`${isVisible ? 'md:block' : 'md:hidden'}`}>
                 <div className='md:pt-2'>
                     <section className='flex flex-col gap-2'>
                         <label htmlFor="right-to-work" className='pb-2'>Right To Work:</label>
                         <select name="right-to-work" id="right-to-work" className="md:w-1/2">
                             <option value="australian-resident">Australian resident</option>
                             <option value="overseas-student">Overseas student</option>
                             <option value="working-holiday-maker">Working holiday maker</option>
                             <option value="other">Other</option>
                         </select>
                         <label htmlFor="current-visa" className='flex flex-col gap-2 mt-6 md:w-1/2'>Current Visa / Number:
                             <input type="text" name="current-visa" id="current-visa"/>
                         </label>
                         <textarea rows={5} className="resize-none border border-[#656ED3] rounded-[2em] p-4 mt-8" placeholder="*Extra information - Optional">
                         </textarea>
                     </section>
                 </div>
             </div>
         </div>
     );
 };

 export default Extras;

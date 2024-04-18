import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 604,
  bgcolor: 'black',
  border: '2px solid #000',

};

export default function GetPremium() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className='py-5 w-full items-center justify-center flex'>
        <button onClick={handleOpen} className=' text-4xl font-bold hover:underline'>Get Premium</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
         <Box sx={style} className="shadow-box  rounded-2xl outline-none">
            <div className='flex flex-col '>
                <div className='flex min-h-[32px] p-4 '>
                    <button onClick={handleClose} className=' w-9 h-9 hover:bg-[#eff3f41a] items-center justify-center rounded-full flex transition-colors'>
                        <svg viewBox="0 0 24 24" width={20} height={20}>
                            <path 
                            fill='#eff3f4'
                            d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"/>
                        </svg>
                    </button>
                </div>
                <div className='pt-12 pb-[72px] flex flex-col px-[72px]'>
                    <div className='flex flex-col items-center justify-center text-[#e7e9ea] '>
                        <h4 className='text-[31px] font-extrabold leading-8'>Hesabının türü hangisi?</h4>
                        <h6 className='mt-5 text-[15px] leading-5 font-normal'>Sana uygun doğru aboneliği seç:</h6>
                    </div>
                    <div className='flex flex-row items-center justify-center mt-8 '>
                        <button className='bg-[#0f1419]  p-4 mr-5 rounded-xl border-2  shadow-box border-[#1d9bf0] flex flex-col text-left '>
                      
                            <h5 className=' text-sm leading-4 text-[#71767b] font-normal mt-1'>Premium</h5>
                            <h4 className=' text-[17px] leading-5 text-[#e7e9ea]  font-bold mt-1'>Bireyim</h4>
                            <h6 className=' text-[13px] leading-4 text-[#71767b] font-normal mt-1'>Bireyler ve içerik üreticileri için</h6>
                        </button>
                        <button className='bg-[#0f1419] max-w-[50%] p-4  rounded-xl border-2 shadow-box flex flex-col gap-1  border-[#5555]'>
                            <h5 className=' text-sm leading-4 text-[#71767b] font-normal '>Onaylı Kuruluşlar</h5>
                            <h4 className=' text-[17px] leading-5 text-[#e7e9ea]  font-bold '>Kurluşum</h4>
                            <h6 className=' text-[13px] leading-3 text-[#71767b] font-normal  text-left'>İşletmler, devlet kurumları, kar amacı gütmeyen kuruluşlar için</h6>
                        </button>
                    </div>
                    <div className='mt-8'>
                        <button className='w-full bg-[#eff3f4] text-black font-bold text-[17px] leading-5 py-4 rounded-full hover:bg-[#d0d2d1] transition-colors'>Abone ol</button>
                    </div>
                </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { BackgroundVideo } from "@/components/ui/background-video";
import { goldman } from "@/app/fonts";
import { FolderOpen, Aperture } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <BackgroundVideo />
      
      <div className="inline-block">
        <div className="rounded-3xl p-[10px] text-center">
          <div className="space-y-0">
            <h1 className={`text-[50px] font-regular text-white tracking-wider leading-[60px] ${goldman.className}`}>VRIS</h1>
            <p className={`text-white/100 text-[14px] leading-[17px] ${goldman.className}`}>Visionary Retail Intelligence System</p>
          </div>
          
          <div className="mt-[40px] flex flex-col gap-[8px]">
            <h2 className="text-2xl font-semibold text-white leading-[29px]">How do you want to start?</h2>
            <p className="text-white/100 text-sm leading-[19px]">
              Choose how you want to input the<br />
              video for shoplifting detection
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <div className="bg-[#0D121E]/40 backdrop-blur-[20px] rounded-2xl p-[10px] inline-flex gap-[8px]">
              <Button 
                variant="outline" 
                className="inline-flex items-center bg-[rgb(13,18,30)] hover:bg-[rgb(13,18,30)]/90 hover:border-[#A483F0] text-white hover:text-white border border-[rgb(53,60,75)] rounded-xl h-[48px] backdrop-blur-[4.24px] px-[12px] transition-colors duration-200"
              >
                <FolderOpen 
                  style={{ width: '20px', height: '20px' }}
                  strokeWidth={1.5}
                  className="mr-0"
                />
                Upload a Video File
              </Button>
              
              <Button 
                variant="outline" 
                className="inline-flex items-center bg-[#0d121e] hover:bg-[rgb(13,18,30)]/90 hover:border-[#A483F0] text-white hover:text-white border border-[rgb(53,60,75)] rounded-xl h-[48px] backdrop-blur-[4.24px] px-[12px] transition-colors duration-200"
              >
                <Aperture 
                  style={{ width: '20px', height: '20px' }}
                  strokeWidth={1.5}
                  className="mr-0"
                />
                Connect a Camera
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

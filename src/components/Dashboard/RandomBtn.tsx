import React, {  useEffect, useRef, useState } from "react"

const Random = ({socket}:{socket: any}) => {
    // const [speak,setSpeak] = useState(false)
    const [hand,setHand] = useState(false)
    // const [stream,setStream] = useState<MediaStream | null>(null);
    // const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    // const chunks = useRef<Blob[]>([]);
    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
      socket?.on("talking", (data: any) => {
        const receivedData = data;
        console.log(receivedData);

      // Assuming the received data is a Float32Array representing audio samples
      // You may need to adjust this based on how the audio data is sent by the sender
      const audioBuffer = new Float32Array(receivedData as ArrayBuffer);

      // Create an AudioBufferSourceNode
      audioContextRef.current = new AudioContext()
      const audioSource = audioContextRef.current.createBufferSource();
      const buffer = audioContextRef.current.createBuffer(1, audioBuffer.length, audioContextRef.current.sampleRate);

      // Copy the received audio data to the AudioBuffer
      buffer.copyToChannel(audioBuffer, 0);

      // Set the AudioBuffer as the audio source for playback
      audioSource.buffer = buffer;

      // Connect the audio source to the destination (e.g., speakers)
      audioSource.connect(audioContextRef.current.destination);

      // Start playback
      audioSource.start();
      })
    },[])
    
    const startListening = () => {
      let shouldCapture = true
      navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
          const audioContext = new AudioContext();
          const mediaStreamSource = audioContext.createMediaStreamSource(stream);
          const analyser = audioContext.createAnalyser();
          
          // Connect the media stream source to the analyser node
          mediaStreamSource.connect(analyser);
          
          // Set up the analyser node
          analyser.fftSize = 2048;
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          
          // Function to capture audio data and send it to the server
          function sendData() {
              if (!shouldCapture) return; // Check if capturing should stop
              
              // Get current audio data
              analyser.getByteTimeDomainData(dataArray);
              console.log(dataArray.buffer);
              socket.emit("talk",dataArray.buffer);
              // Call sendData() recursively to keep capturing and sending data
              requestAnimationFrame(sendData);
          }
          
          // Start capturing and sending audio data
          sendData();
          
          // Example: Stop capturing audio after 10 seconds
          setTimeout(() => {
              shouldCapture = false;
              console.log('Audio capture stopped');
          }, 2000);
      })
      .catch(function(err) {
          console.error('getUserMedia error: ', err);
      });
      // navigator.mediaDevices.getUserMedia({ audio: true })
      // .then((stream) => {
      //   setStream(stream);
      //   mediaRecorder.current = new MediaRecorder(stream!);
        
      //         mediaRecorder.current.ondataavailable = (event) => {
      //           console.log("event");
                
      //           if (event.data.size > 0) {
      //             chunks.current.push(event.data);
      //             console.log("send");
      //             console.log(event.data);   
      //             socket.emit("talk",event.data )
      //           }
      //         };
        
              // mediaRecorder.current.onstop = () => {
              //   const blob = new Blob(chunks.current, { type: 'audio/wav' });
              //   // Do something with the recorded audio blob, like saving it or sending it to the server
              //   console.log("send");
                
              //   // socket?.emit("talk",blob)
              //   chunks.current = [];
              // };
        
              // mediaRecorder.current.start();
        // const audioContext = new AudioContext();
        // const audioInput = audioContext.createMediaStreamSource(stream);
        // const bufferSize = 2048;
        // const recorder = audioContext.createScriptProcessor(bufferSize, 1, 1);

        // recorder.onaudioprocess = (e) => {
        //   const left = e.inputBuffer.getChannelData(0);
        //   // console.log(left);
          
        //   // Send audio data to server
        //   // socket.emit("talk",left);
        // };

        // audioInput.connect(recorder);
        // recorder.connect(audioContext.destination);
      // })
    //   .catch((error) => console.error('Error accessing media devices:', error));
    }
    const stopListening = () => {
      if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
            mediaRecorder.current.stop();
            console.log("stop");
            
          //   setIsRecording(false);
          }
    }
    const raiseHand = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if(hand){
        setHand(false);
        }else {
        setHand(true);
        
        }
   }

    return (
        // onClick={(e)=>viewDetails(e)}
        <>
        <button >Project Details</button>
        <button onClick={(e)=>raiseHand(e)}>{hand ? "hand up" : "hand down"}</button>
        <button type="button" onClick={startListening} >speak</button>
        <button type="button" onClick={stopListening} >mute</button>
        </>
    )
}

export default Random


// const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
// const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);

// useEffect(() => {
//   const newSocket = io('http://your-socket-server-url');
//   setSocket(newSocket);

//   const context = new (window.AudioContext || (window as any).webkitAudioContext)();
//   setAudioContext(context);

//   return () => {
//     newSocket.disconnect();
//     context.close();
//   };
// }, []);

// useEffect(() => {
//   if (!socket || !audioContext) return;

//   socket.on('spokenWordChunk', (chunk: ArrayBuffer) => {
//     // Decode the chunk and play it
//     audioContext.decodeAudioData(chunk, (buffer) => {
//       const source = audioContext.createBufferSource();
//       source.buffer = buffer;
//       source.connect(audioContext.destination);
//       source.start();
//       setAudioSource(source);
//     });
//   });

//   return () => {
//     socket.off('spokenWordChunk');
//     if (audioSource) {
//       audioSource.stop();
//     }
//   };
// }, [socket, audioContext, audioSource]);





// const startRecording = async () => {
    
//   try {
//     if(!stream){
//       const streaming = await navigator.mediaDevices.getUserMedia({ audio: true });
//       setStream(streaming)
//       console.log(streaming,stream); 
//     }
//       mediaRecorder.current = new MediaRecorder(stream!);
//           // socket?.emit("talk",event.data )

//       mediaRecorder.current.ondataavailable = (event) => {
//         console.log("event");
        
//         if (event.data.size > 0) {
//           chunks.current.push(event.data);
//           console.log("send");
//           // console.log(event.data);   
//           // socket?.emit("talk",event.data )
//         }
//       };

//       mediaRecorder.current.onstop = () => {
//         const blob = new Blob(chunks.current, { type: 'audio/wav' });
//         // Do something with the recorded audio blob, like saving it or sending it to the server
//         console.log("send");
        
//         // socket?.emit("talk",blob)
//         chunks.current = [];
//       };

//       mediaRecorder.current.start();
//   } catch (error) {
//     console.error('Error accessing microphone:', error);
//     setSpeak(false)
//   }
// };

// const stopRecording = () => {
//   if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
//     mediaRecorder.current.stop();
//     console.log("stop");
    
//   //   setIsRecording(false);
//   }
// };

//   // const speakOrNot = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//   //     e.preventDefault()
//   //     if(speak){
//   //         console.log("hhh");
          
//   //         setSpeak(false);
//   //         stopRecording()
//   //     }else {
//   //         console.log("fffg");
          
//   //       setSpeak(true);
//   //       startRecording()
//   //     }
//   //   }




// const [isListening, setIsListening] = useState(false);
//   // const [spokenWord, setSpokenWord] = useState('');
//   const [_transcript, setTranscript] = useState('');

//     const startListening = () => {
//       if ('webkitSpeechRecognition' in window) {
//         // Web Speech API is supported
//         // Rest of the code
    
//       const recognition = new (window as any).webkitSpeechRecognition();
//       console.log(recognition);
      
//     recognition.lang = 'en-US';
//     recognition.continuous = true;

//     recognition.onresult = (event: { results: string | any[] }) => {
//       const transcript = event.results[event.results.length - 1][0].transcript;
//       setTranscript(transcript);
//       socket.emit("talk",transcript);
//     };

//     recognition.onerror = (event: { error: any }) => {
//       console.error('Speech recognition error:', event.error);
//       setIsListening(false);
//     };
//     recognition.onend = () => {
//       if (isListening) {
//         recognition.start();
//       }
//     };

//     recognition.start();
//   } else {
//     // Web Speech API is not supported
//     console.error('Web Speech API is not supported in this browser.');
// }
//   };
    

//     const stopListening = () => {
//         setIsListening(false);
//     }
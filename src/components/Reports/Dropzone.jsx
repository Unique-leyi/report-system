"use client"
import { Stack, Flex, Box, FormControl, Button, FormHelperText, Input } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { useState, useCallback, useEffect } from "react";
import { uploadDocs } from "../../../public/assets";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";


const Dropzone = ({ name }) => {
    const [files, setFiles] = useState([]);
    const [rejected, setRejected] = useState([]);
  
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
      if (acceptedFiles && acceptedFiles?.length <= 3) {
        const newFiles = acceptedFiles?.slice(0, 3 - files.length);
        setFiles(previousFiles => [
          ...previousFiles,
          ...newFiles.map(file =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        ])
      }
  
      if (rejectedFiles && rejectedFiles?.length) {
        setRejected(previousFiles => [...previousFiles, ...rejectedFiles]);
      }
    }, [])
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: {
        'image/*': []
      },
      maxSize: 1024 * 1000,  //not more than 1MB
      onDrop
    });
  
    useEffect(() => {
      return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files])
  
    const removeFile = (name) => {
      setFiles(files => files.filter(file => file.name !== name));
    }
  
 
    return (
        <Flex 
            justify="flex-start" 
            align="flex-start" 
            gap="1rem" 
            direction="column"
            className="container" 
        >
            <Box w="100%" {...getRootProps({ className: "dropzone" })}>
                <FormControl id="task_image">
                    <Flex w={{
                      base: "19rem",
                      sm: "30rem",
                    }} justify="center" align="center" gap="1rem" direction="column"  className="!text-white !mb-2 !text-sm !font-outfit !bg-[#0E1515] !border-[1px] !py-12 !px-6 !border-[rgba(255,255,255,0.08)] !rounded-lg">

                        <Input name={name} {...getInputProps()}/>
                        <Image src={uploadDocs} alt="upload-document"/>

                    </Flex>
                    <Flex justify="space-between" align="center" gap="0rem">
                      <FormHelperText className="!text-white !text-sm">
                          <b className="!text-red-600 !mx-2">*</b>
                          Maximum of 3 PNGs
                      </FormHelperText>
                      <Box spacing={2}>
                        {files.length > 0 &&
                          files.map((file, i) => (
                            <Button key={file.name} onClick={() => removeFile(file.name)} rightIcon={<MdOutlineCancel/>} iconSpacing={"0.5rem !important"} className="!text-xs !py-[0.3px] !px-2"  border="1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))" borderRadius='full' color="white" 
                              sx={{
                                  backgroundColor: "var(--darkmode-bg-01, #0E1515) !important",
                              }}>
                                PNG{i+1}
                            </Button>
                          )) 
                        }
                      </Box>
                    </Flex>
                </FormControl>
            </Box>
        </Flex>
    )
}

export default Dropzone
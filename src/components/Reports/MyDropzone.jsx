"use client"
import { Stack, Flex, Box, FormControl, FormLabel, FormHelperText, Input } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { useState, useCallback, useEffect } from "react";
import { uploadDocs } from "../../../public/assets/";
import Image from "next/image";

const MyDropzone = ({ name }) => {
    const [files, setFiles] = useState([])
    const [rejected, setRejected] = useState([])
  
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
      if (acceptedFiles?.length) {
        setFiles(previousFiles => [
          ...previousFiles,
          ...acceptedFiles.map(file =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        ])
      }
  
      if (rejectedFiles?.length) {
        setRejected(previousFiles => [...previousFiles, ...rejectedFiles]);
      }
    }, [])
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: {
        'image/*': []
      },
      maxSize: 1024 * 1000,
      onDrop
    });
  
    useEffect(() => {
      // Revoke the data uris to avoid memory leaks
      return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files])
  
    const removeFile = name => {
      setFiles(files => files.filter(file => file.name !== name));
    }
  
    const removeAll = () => {
      setFiles([]);
      setRejected([]);
    }
  
    const removeRejected = name => {
      setRejected(files => files.filter(({ file }) => file.name !== name));
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      if (!files?.length) return
  
      const formData = new FormData()
      files.forEach(file => formData.append('file', file));
      formData.append('upload_preset', 'friendsbook')
  
      const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL
      const data = await fetch(URL, {
        method: 'POST',
        body: formData
      }).then(res => res.json())
  
      console.log(data)
    }
    return (
        <Flex 
            justify="flex-start" 
            align="flex-start" 
            gap="1rem" 
            direction="column" 
        >
            <Box w="100%">
                <FormControl id="task-image">
                    <Flex w="30rem" justify="center" align="center" gap="1rem" direction="column"  className="!text-white !mb-2 !text-sm !font-outfit !bg-[#0E1515] !border-[1px] !py-12 !px-6 !border-[rgba(255,255,255,0.08)] !rounded-lg">

                        <Input type="hidden" name={name} {...getInputProps}/>
                        <Image src={uploadDocs} alt="upload-document"/>

                    </Flex>
                    <FormHelperText className="!text-white !text-sm">
                        <b className="!text-red-600 !mx-2">*</b>
                        Maximum of 3 PNGs
                    </FormHelperText>
                </FormControl>
            </Box>
        </Flex>
    )
}

export default MyDropzone
"use client"
import { Stack, Flex, Box, FormControl, FormLabel, Button, FormHelperText, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { uploadDocs } from "../../../public/assets";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";

const Dropzone = ({ name, formData, setFormData, files, onChange }) => {
  const removeFile = (name) => {
    const updatedFiles = files.filter((file) => file.name !== name);
    onChange(updatedFiles);

    setFormData((prevData) => ({
      ...prevData,
      task_images: prevData.task_images.filter((image) => image.name !== name),
    }));
  };

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Flex
      justify="flex-start"
      align="flex-start"
      gap="1rem"
      direction="column"
      className="container"
    >
      <Box
        w="100%"
        className="dropzone"
        name={name}
      >
        <FormControl id="task_image">
          <Flex
            w={{
              base: "19rem",
              sm: "30rem",
            }}
            justify="center"
            align="center"
            gap="1rem"
            direction="column"
            className="!text-white !mb-2 !text-sm !font-outfit !bg-[#0E1515] !border-[1px] !py-12 !px-6 !border-[rgba(255,255,255,0.08)] !rounded-lg"
          >

            <FormLabel id="task_images">
              <Input
                type="hidden"
                name={name}
                onChange={(e) => onChange(e.target.files)}
              />
            </FormLabel>
            <Image src={uploadDocs} alt="upload-document" />
          </Flex>

          <Flex justify="space-between" align="center" gap="0rem">
            <FormHelperText className="!text-white !text-sm">
              <b className="!text-red-600 !mx-2">*</b>
              Maximum of 3 PNGs
            </FormHelperText>
            <Box spacing={2}>
              {files.length > 0 &&
                files.map((file, i) => (
                  <Button
                    key={file.name}
                    onClick={() => removeFile(file.name)}
                    rightIcon={<MdOutlineCancel />}
                    iconSpacing={"0.5rem !important"}
                    className="!text-xs !py-[0.3px] !px-2"
                    border="1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))"
                    borderRadius="full"
                    color="white"
                    sx={{
                      backgroundColor: "var(--darkmode-bg-01, #0E1515) !important",
                    }}
                  >
                    PNG{i + 1}
                  </Button>
                ))
              }
            </Box>
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
}

export default Dropzone;

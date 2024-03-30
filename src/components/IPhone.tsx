/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: polyman (https://sketchfab.com/Polyman_3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-15-pro-max-black-df17520841214c1792fb8a44c6783ee7
Title: Apple iPhone 15 Pro Max Black
*/

import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { Texture, Color } from 'three' // Import Texture and Color from three.js

interface Props {
  item: {
    img: string
    color: string[]
  }
}

const Model: React.FC<Props> = ({ item }) => {
  const { nodes, materials } = useGLTF('/models/scene.glb')
  const texture: Texture = useTexture(item.img)

  useEffect(() => {
    Object.entries(materials).forEach(([key, material]) => {
      // These are the material names that can't be changed color
      if (
        key !== 'zFdeDaGNRwzccye' &&
        key !== 'ujsvqBWRMnqdwPx' &&
        key !== 'hUlRcbieVuIiOXG' &&
        key !== 'jlzuBkUzuJqgiAK' &&
        key !== 'xNrofRCqOXXHVZt'
      ) {
        // Type assertion for material.color
        if ((material as any).color instanceof Color) {
          ;(material as any).color = new Color(item.color[0])
        }
        material.needsUpdate = true
      }
    })
  }, [materials, item])

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.ttmRoLdJipiIOmf as any)?.geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DjsDkGiopeiEJZK as any)?.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.buRWvyqhBBgcJFo as any)?.geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.MrMmlCAsAxJpYqQ_0 as any)?.geometry}
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.wqbHSzWaUxBCwxY_0 as any)?.geometry}
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.QvGDcbDApaGssma as any)?.geometry}
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.vFwJFNASGvEHWhs as any)?.geometry}
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.evAxFwhaQUwXuua as any)?.geometry}
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.USxQiqZgxHbRvqB as any)?.geometry}
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.TvgBVmqNmSrFVfW as any)?.geometry}
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.GuYJryuYunhpphO as any)?.geometry}
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.pvdHknDTGDzVpwc as any)?.geometry}
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.CfghdUoyzvwzIum as any)?.geometry}
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DjdhycfQYjKMDyn as any)?.geometry}
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.usFLmqcyrnltBUr as any)?.geometry}
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.xXDHkMplTIDAXLN as any)?.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        <meshStandardMaterial roughness={1} map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.vELORlCJixqPHsZ as any)?.geometry}
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.EbQGKrWAqhBHiMv as any)?.geometry}
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.EddVrWkqZTlvmci as any)?.geometry}
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.KSWlaxBcnPDpFCs as any)?.geometry}
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.TakBsdEjEytCAMK as any)?.geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.IykfmVvLplTsTEW as any)?.geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.wLfSXtbwRlBrwof as any)?.geometry}
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.WJwwVjsahIXbJpU as any)?.geometry}
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.YfrJNXgMvGOAfzz as any)?.geometry}
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DCLCbjzqejuvsqH as any)?.geometry}
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.CdalkzDVnwgdEhS as any)?.geometry}
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.NtjcIgolNGgYlCg as any)?.geometry}
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.pXBNoLiaMwsDHRF as any)?.geometry}
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.IkoiNqATMVoZFKD as any)?.geometry}
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.rqgRAGHOwnuBypi as any)?.geometry}
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  )
}

export default Model

useGLTF.preload('/models/scene.glb')

---
layout: post
title: "Capítulo 3: Verificación"
date: 2026-02-24 12:00:00 -0600
description: "Verificación post-instalación de componentes y monitoreo con jtop"
tags: [jetson, tutorial]
categories: blog
featured: false
related_posts: false
giscus_comments: false
---

**Verificación post-instalación de componentes:**
Tras completar la transferencia del SDK, reinicie la Jetson Nano para consolidar los cambios. Al iniciar sesión, abra la terminal y ejecute los siguientes comandos de verificación para confirmar que el entorno de desarrollo, especialmente CUDA, está correctamente configurado y listo para su uso:

![Figura 36: Comandos de verificación](/assets/img/image036.png)
*Figura 36: Comandos de verificación*

---

**Monitoreo del sistema con jtop:**
Tras ejecutar el comando final, se iniciará la utilidad jtop. Al navegar hasta la séptima pestaña (fig. 37), podrá visualizar un resumen detallado de las especificaciones y componentes instalados en su Jetson Nano, incluyendo las versiones de CUDA, cuDNN, TensorRT y el estado actual del hardware.

![Figura 37: Resumen en jtop](/assets/img/image037.png)
*Figura 37: Resumen del sistema en jtop*

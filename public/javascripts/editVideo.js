var VideoCutter = {
        URL: 'http://firmseeksite3.ftp.firmseek.net/media_files/video/wysiwyg.mp4#t=',
        startTime: 0,
        endTime: 10000,
        videoDOM: document.getElementById('video'),
        init: function(){
                this.videoDOM.addEventListener('loadedmetadata', () => {
                    this.endTime = this.videoDOM.duration;
                    console.log(this.endTime);
                }, false);
                this.generateSrc(); 

                $('#set').on('click',  () => {
                   this.updateValues();
                   
                    console.log(this.startTime);
                });

                $('#set2').on('click',  () => {
                     this.updateValues();
                    console.log(this.endTime);
                });
        },
        generateSrc: function() {
          return this.URL + this.startTime + "," + Math.round(this.endTime);
        },
        updateValues: function(){
            this.endTime = $('#numberTo').val();
            this.startTime = $('#numberFrom').val();
            this.videoDOM.src =  this.generateSrc();
        }
    }

    VideoCutter.init();
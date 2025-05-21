
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useToast } from '@/components/ui/use-toast';
import { Sparkles } from 'lucide-react';

const CreateCourse = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [chaptersCount, setChaptersCount] = useState('5');
  const [includeVideo, setIncludeVideo] = useState(true);
  const [difficulty, setDifficulty] = useState('beginner');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate('/courses');
  };

  const handleGenerateCourse = async () => {
    if (!title) {
      toast({
        title: "Title required",
        description: "Please provide a course title to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    
    try {
      // Simulate API call to generate a course
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newCourseId = `course-${Date.now()}`;
      
      // Generate default chapters based on count
      const generatedChapters = [];
      const chapterCount = parseInt(chaptersCount) || 5;
      
      for (let i = 1; i <= chapterCount; i++) {
        generatedChapters.push({
          id: `chapter-${i}`,
          title: `Chapter ${i}`,
          content: `This is auto-generated content for Chapter ${i}. This will be replaced with AI-generated content.`,
          duration: `${10 + i * 5} minutes`,
          completed: false
        });
      }
      
      // Create a course object with all the options
      const newCourse = {
        id: newCourseId,
        title: title,
        category: 'programming', // Default category for simplicity
        description: description || `Comprehensive course on ${title} for students of all levels.`,
        progress: 0,
        materials: [],
        difficulty: difficulty,
        includeVideos: includeVideo,
        createdAt: new Date(),
        updatedAt: new Date(),
        chapters: generatedChapters
      };
      
      // Save course to storage
      const courses = JSON.parse(localStorage.getItem('easystudy-courses') || '[]');
      courses.push(newCourse);
      localStorage.setItem('easystudy-courses', JSON.stringify(courses));
      
      toast({
        title: "Course generated successfully!",
        description: "Your course has been created with AI-generated content.",
      });
      
      // Navigate to the course detail page
      navigate(`/courses/${newCourseId}`);
      
    } catch (error) {
      console.error("Error generating course:", error);
      toast({
        title: "Generation failed",
        description: "There was a problem generating your course. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Layout>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[550px]" onInteractOutside={handleClose}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Create New Course Using AI</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Course Name</Label>
              <Input
                id="title"
                placeholder="e.g., React Native, Machine Learning Basics"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Course Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="Course Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full"
                rows={4}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="chaptersCount">No. Of Chapters</Label>
              <Input
                id="chaptersCount"
                type="number"
                placeholder="e.g., 5"
                value={chaptersCount}
                onChange={(e) => setChaptersCount(e.target.value)}
                min="1"
                max="20"
                className="w-full"
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="includeVideo">Include Video</Label>
              <Switch 
                id="includeVideo" 
                checked={includeVideo} 
                onCheckedChange={setIncludeVideo}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger id="difficulty" className="w-full">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={handleGenerateCourse}
                className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90"
                disabled={isGenerating}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating Course..." : "Generate Course"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default CreateCourse;
